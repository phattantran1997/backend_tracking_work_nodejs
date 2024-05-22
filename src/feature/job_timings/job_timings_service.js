import db from "../../models/index"
import HttpStatusCode from "../../helper/HttpStatusCode";
const { Op } = require('sequelize');

export async function getAllCommunities() {
    try {
        let item = await db.JobTimings.findAll();
        return item;
    } catch (error) {
        throw new Error('Error:'+error.message);
    }
}

export async function getByID(ID) {
    try {
        let item = await db.JobTimings.findOne({
            where: { id: ID },
        });
        return item
    } catch (error) {
        throw new Error('Error:'+error.message);
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
        throw new Error('Error:'+error.message);
    }
}
export async function createOne(data) {
    try {

        let newRecord = await db.JobTimings.create({
            //Add created attributes here
        });

        return {
            errCode: HttpStatusCode.OK,
            data: newRecord,
            message: 'The JobTimings created successfully'
        };
    } catch (error) {
        throw new Error('Error:'+ error.message);
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
        throw new Error('Error:'+ error.message);
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
        throw new Error('Error:'+ error.message);
    }
}


