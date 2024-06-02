import HttpStatusCode from "../../helper/HttpStatusCode";
import * as service from "./job_timings_service";

export async function getAll(req, res) {
    try {
        let item = await service.getAllCommunities();
        return res.status(HttpStatusCode.OK).json(item);
    } catch (error) {
        return res.status(HttpStatusCode.INTERNAL_SERVER).json(error);
    }
}

export async function getByOperatorID(req,res){
    const operatorID = req.query.operatorID;

  if (!operatorID) {
    return res.status(HttpStatusCode.BAD_REQUEST).json({ message: 'Missing Operator ID' });
  }

  try {
    const jobTimings = await service.getByOperatorID(operatorID);

    if (!jobTimings || jobTimings.length === 0) {
      return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'No job timings found for the given ' +operatorID });
    }

    return res.status(HttpStatusCode.OK).json(jobTimings);
  } catch (error) {
    console.error('Error retrieving job timings:', error);
    return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
  }
}

export async function getByRangeDate(req,res){
    const startDate = req.query.startDate;
    const endDate = req.query.endDate;
    try {
        const jobTimings = await service.getByRangeDate(startDate, endDate);
    
        if (!jobTimings || jobTimings.length === 0) {
          return res.status(HttpStatusCode.NOT_FOUND).json({ message: 'No job timings found for the given Operator ID' });
        }
    
        return res.status(HttpStatusCode.OK).json(jobTimings);
      } catch (error) {
        console.error('Error retrieving job timings:', error);
        return res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({ message: 'Internal server error' });
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
            return res.status(HttpStatusCode.NOT_FOUND).json({message:'job_timings not found with this ID'});
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
