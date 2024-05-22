import db from "../../models/index"
import HttpStatusCode from "../../helper/HttpStatusCode";
export async function getAllCommunities() {
    try {
        let item = await db.Products.findAll();
        return item;
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function getByID(ID) {
    try {
        let item = await db.Products.findOne({
            where: { id: ID },
        });
        return item
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function getByNameAndJobNo(attributes) {
    try {
        let item = await db.Products.findOne({
            where: { Name: attributes.Name, JobNo: attributes.JobNo},
        });
        return item
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function createOne(data) {
    try {
        let newRecord = await db.Products.create({
            Name: data.Name,
            JobNo: data.JobNo,
            Notes: data.Notes,
            Type: data.Type,
            Description: data.Description,
            Area: data.Area,
            WidthDim: data.WidthDim,
            DepthDim: data.DepthDim,
            LengthDim: data.LengthDim,
            Weight: data.Weight,
            QRCode: data.QRCode
        });

        return {
            errCode: HttpStatusCode.OK,
            data: newRecord,
            message: 'The Products created successfully'
        };
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function editOne(data) {
    try {
        let Products = await db.Products.findOne({
            where: { id: data.id },
            raw: false,
        });

        if (Products) {
            //Add updated attributes here

            await Products.save();

            return {
                errCode: HttpStatusCode.OK,
                data: Products,
                message: 'The Products updated successfully',

            };
        } else {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: 'The Products not found!',
                data: null
            };
        }
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}

export async function deleteOne(ID) {
    try {
        let foundProducts = await db.Products.findOne({
            where: { id: ID },
        });

        if (!foundProducts) {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: `The Products is not found`,
                data: null
            };
        }
        await db.Products.destroy({
            where: { id: ID },
        });

        return {
            errCode: HttpStatusCode.OK,
            message: `The Products is deleted`,
            data: null
        };
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}