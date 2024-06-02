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

export async function getByNameAndJobNo(req, res) {
    let name = req.query.name;
    let jobno = req.query.jobno; 
    if (!name || !jobno) {
        return res.status(HttpStatusCode.Validation).json({message: 'Missing required parameters'});
    }
    try {
        let item = await service.getByNameAndJobNo({Name:name,JobNo:jobno});

        if (item) {
            return res.status(HttpStatusCode.OK).json(item);
        } else {
            return res.status(HttpStatusCode.NOT_FOUND).json({message:'products not found with this ID'});
        }
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER).json(error);
    }
}

export async function getJobno(req, res) {
    try {
        let items = await service.getDataJobno();

        if (items.length > 0) {
            return res.status(HttpStatusCode.OK).json(items);
        } else {
            return res.status(HttpStatusCode.NOT_FOUND).json({message:'products not found with this jobno'});
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
export async function updateQRCode(req, res) {
    const id = req.query.id;  // Ensure you're accessing 'id' correctly

    if (!id) {
        return res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Missing ID required parameters' });
    }

    try {
        let response = await service.updateQRCode(id, req.body);
        return res.status(response.status).json(response);
    } catch (error) {
        console.error("Error in updateQRCode:", error);
        return res.status(HttpStatusCode.INTERNAL_SERVER).json({ message: 'Internal Server Error', error: error.message });
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
