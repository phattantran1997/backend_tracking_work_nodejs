import db from "../../models/index"
import HttpStatusCode from "../../helper/HttpStatusCode";
export async function getAllCommunities() {
    try {
        let item = await db.{{ name.pascalCase() }}.findAll();
        return item;
    } catch (error) {
        throw new Error('Error:'+error.message);
    }
}

export async function getByID(ID) {
    try {
        let item = await db.{{ name.pascalCase() }}.findOne({
            where: { id: ID },
        });
        return item
    } catch (error) {
        throw new Error('Error:'+error.message);
    }
}

export async function createOne(data) {
    try {

        let newRecord = await db.{{ name.pascalCase() }}.create({
            //Add created attributes here
        });

        return {
            errCode: HttpStatusCode.OK,
            data: newRecord,
            message: 'The {{ name.pascalCase() }} created successfully'
        };
    } catch (error) {
        throw new Error('Error:'+ error.message);
    }
}

export async function editOne(data) {
    try {
        let {{ name.pascalCase() }} = await db.{{ name.pascalCase() }}.findOne({
            where: { id: data.id },
            raw: false,
        });

        if ({{ name.pascalCase() }}) {
            //Add updated attributes here

            await {{ name.pascalCase() }}.save();

            return {
                errCode: HttpStatusCode.OK,
                data: {{ name.pascalCase() }},
                message: 'The {{ name.pascalCase() }} updated successfully',
                
            };
        } else {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: 'The {{ name.pascalCase() }} not found!',
                data: null
            };
        }
    } catch (error) {
        throw new Error('Error:'+ error.message);
    }
}

export async function deleteOne(ID) {
    try {
        let found{{ name.pascalCase() }} = await db.{{ name.pascalCase() }}.findOne({
            where: { id: ID },
        });

        if (!found{{ name.pascalCase() }}) {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: `The {{ name.pascalCase() }} is not found`,
                data: null
            };
        }
        await db.{{ name.pascalCase() }}.destroy({
            where: { id: ID },
        });

        return {
            errCode: HttpStatusCode.OK,
            message: `The {{ name.pascalCase() }} is deleted`,
            data: null
        };
    } catch (error) {
        throw new Error('Error:'+ error.message);
    }
}


