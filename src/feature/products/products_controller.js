import HttpStatusCode from "../../helper/HttpStatusCode";
import * as service from "./products_service";

export async function getAll(req, res) {
    try {
        let item = await service.getAllCommunities();
        return res.status(HttpStatusCode.OK).json(item);
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER).json(error);
    }
}


export async function getById(req, res) {
    let id = req.query.id; 
    if (!id) {
        return res.status(HttpStatusCode.Validation).json({message: 'Missing ID required parameters'});
    }
    try {
        let item = await service.getByID(id);

        if (item) {
            return res.status(HttpStatusCode.OK).json(item);
        } else {
            return res.status(HttpStatusCode.NOT_FOUND).json({message:'products not found with this ID'});
        }
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER).json(error);
    }
}

export async function createOne(req, res) {
    try{
        let newRecord = await service.createOne(req.body);
        return res.status(newRecord.errCode).json(newRecord);
    }
    catch(error){
        return res.status(HttpStatusCode.INTERNAL_SERVER).json({message: error.message});
    }
}

export async function editOne(req, res) {
    if(!req.body.id){
        return res.status(HttpStatusCode.Validation).json({message: 'Missing ID required parameters'});
    } 
    try{
        let newRecord = await service.editOne(req.body);
        return res.status(newRecord.errCode).json(newRecord);
    }
    catch(error){
        return res.status(HttpStatusCode.INTERNAL_SERVER).json(error);
    }
}

export async function deleteOne(req, res) {
    if (!req.body.id) {
        return res.status(HttpStatusCode.Validation).json({message: 'Missing ID required parameters'});
    }
    try{
        let deletedItem = await service.deleteOne(req.body.id);
        return res.status(deletedItem.errCode).json(deletedItem);
    }catch(errCode){
        return res.status(HttpStatusCode.INTERNAL_SERVER).json(error);
    }
   
  
}
