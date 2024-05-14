import db from "../../models/index"
import HttpStatusCode from "../../helper/HttpStatusCode";
import { generateAccessToken } from "../auth/auth_service";
const bcrypt = require('bcrypt');

export async function getAllUsers() {
    try {
        let item = await db.Users.findAll();
        return {
            errCode: HttpStatusCode.OK,
            errMessage: "Get data success",
            data: item};
    } catch (error) {
        throw error;
    }
}

export async function getByID(ID) {
    try {
        let item = await db.Users.findOne({
            where: { id: ID },
        });
        return item
    } catch (error) {
        throw new Error('Error:'+error.message);
    }
}

export async function createOne(data) {
    const saltRounds = 10;
    const plainPassword = data.password;
    const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);

    try {
        // Check if the username already exists
        const existingUser = await db.Users.findOne({ where: { username: data.username } });
        if (existingUser) {
            return {
                errCode: HttpStatusCode.BAD_REQUEST,
                message: 'Username already exists. Please use a different username.'
            };
        }

        let newRecord = await db.Users.create({
            name: data.name,
            username: data.username,
            password: hashedPassword,
            role: data.role
        });

        return {
            errCode: HttpStatusCode.OK,
            data: newRecord,
            message: 'The Users created successfully'
        };
    } catch (error) {
        throw new Error('Error:'+ error.message);
    }
}

export async function login(data){
    try {
        let accessToken = "";
        let user = await db.Users.findOne({
            where: { username: data.username },
        });
        
        if (!user) {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: 'The Users not found!',
                data: null
            };
        }

        const checkPassword = await bcrypt.compare(data.password, user.password);

        if (!checkPassword) {
            return {
                errCode: HttpStatusCode.UNAUTHORIZED,
                message: 'The password is incorrect!',
                data: null
            };
        }
        else{
            accessToken = generateAccessToken(data.username);
            user.accessToken = accessToken;
        }
        return {
            errCode: HttpStatusCode.OK,
            message: 'Login successfully',
            data: user,
            
        };
    } catch (error) {
        console.error(error);
        throw new Error('Error:'+ error.message);
    }

}
export async function editOne(data) {
    try {
        let Users = await db.Users.findOne({
            where: { id: data.id },
            raw: false,
        });

        if (Users) {
            //Add updated attributes here

            await Users.save();

            return {
                errCode: HttpStatusCode.OK,
                data: Users,
                message: 'The Users updated successfully',
                
            };
        } else {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: 'The Users not found!',
                data: null
            };
        }
    } catch (error) {
        throw new Error('Error:'+ error.message);
    }
}

export async function deleteOne(ID) {
    try {
        let foundUsers = await db.Users.findOne({
            where: { id: ID },
        });

        if (!foundUsers) {
            return {
                errCode: HttpStatusCode.NOT_FOUND,
                message: `The Users is not found`,
                data: null
            };
        }
        await db.Users.destroy({
            where: { id: ID },
        });

        return {
            errCode: HttpStatusCode.OK,
            message: `The Users is deleted`,
            data: null
        };
    } catch (error) {
        throw new Error('Error:'+ error.message);
    }
}


