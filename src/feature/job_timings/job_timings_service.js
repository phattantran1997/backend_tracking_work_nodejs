import db from "../../models/index"
import HttpStatusCode from "../../helper/HttpStatusCode";
import moment from "moment";
const { Op } = require('sequelize');

export async function getAllCommunities() {
    try {
        let item = await db.JobTimings.findAll();
        return item;
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function getByID(ID) {
    try {
        let item = await db.JobTimings.findOne({
            where: { id: ID },
        });
        return item
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}
export async function getByOperatorID(Operator) {
    try {
        let items = await db.JobTimings.findAll({
            where: {
                OperatorID: Operator,
                Status: {
                    [Op.or]: ['Done', 'Doing']
                }
            }
        });
        return items;
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function getByRangeDate(startDate, endDate){
    try {
        // Ensure dates are in the correct format if they are not being passed in that format
        const format = 'DD/MM/YYYY'; // Adjust this format to match how dates are stored in JobDay
        const start = moment(startDate, format).format(format);
        const end = moment(endDate, format).format(format);

        let items = await db.JobTimings.findAll({
            where: {
                JobDay: {
                    [Op.between]: [start, end]
                }
            }
        });
        return items;
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

function durationToHms(duration) {
    const hours = Math.floor(duration.asHours());
    const minutes = Math.floor(duration.minutes());
    const seconds = Math.floor(duration.seconds());

    const hDisplay = hours > 0 ? hours + ":" : "0:";
    const mDisplay = minutes > 9 ? minutes : "0" + minutes;
    const sDisplay = seconds > 9 ? seconds : "0" + seconds;
    return hDisplay + mDisplay + ":" + sDisplay;
}

export async function upDateDurationOfLast(newRecord) {
    try {
        const format = 'DD/MM/YYYY HH:mm:ss';

        let lastItem = await db.JobTimings.findOne({
            where: {
                OperatorID: newRecord.OperatorID,
                Status: 'Doing'
            },
            order: [
                ['JobTime', 'DESC']
            ],
            raw: false
        });

        if (lastItem) {
            const Date1 = moment(newRecord.JobDay + " " + newRecord.JobTime, format);
            const Date2 = moment(lastItem.JobDay + " " + lastItem.JobTime, format);
            const duration = moment.duration(Date1.diff(Date2));
            lastItem.Duration = durationToHms(duration);
            lastItem.Status = 'Done';
            await lastItem.save();

            return {
                errCode: HttpStatusCode.OK,
                data: lastItem,
                message: 'The Jobtimings updated successfully',

            };
        }

    } catch (error) {
        console.error('Error:', error.message);
        throw new Error('Error: ' + error.message);
    }
}
export async function createOne(data) {
    try {
        await upDateDurationOfLast(data);

        let newRecord = await db.JobTimings.create({
            ProductID: data.ProductID,
            JobNo: data.JobNo,
            OperatorID: data.OperatorID,
            JobTime: data.JobTime,
            JobDay: data.JobDay,
            Duration: "00:00:00",
            Status: 'Doing'
        });

        return {
            errCode: HttpStatusCode.OK,
            data: newRecord,
            message: 'The JobTimings created successfully'
        };
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function editOne(data) {
    try {
        let JobTimings = await db.JobTimings.findOne({
            where: { id: data.id },
            raw: false,
        });

        if (JobTimings) {
            //Add updated attributes here

            await JobTimings.save();

            return {
                errCode: HttpStatusCode.OK,
                data: JobTimings,
                message: 'The JobTimings updated successfully',

            };
        } else {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: 'The JobTimings not found!',
                data: null
            };
        }
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function deleteOne(ID) {
    try {
        let foundJobTimings = await db.JobTimings.findOne({
            where: { id: ID },
        });

        if (!foundJobTimings) {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: `The JobTimings is not found`,
                data: null
            };
        }
        await db.JobTimings.destroy({
            where: { id: ID },
        });

        return {
            errCode: HttpStatusCode.OK,
            message: `The JobTimings is deleted`,
            data: null
        };
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}


