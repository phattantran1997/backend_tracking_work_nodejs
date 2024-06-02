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
            where: { Name: attributes.Name, JobNo: attributes.JobNo },
        });
        return item
    } catch (error) {
        throw new Error('Error:' + error.message);
    }
}
export async function getDataJobno() {
    try {
        let item = await db.Products.findAll({
            attributes: ['jobno'],
            group: ['jobno'],
            order: [['jobno', 'ASC']],
        });
        return item
    }
    catch (error) {
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
        console.log(data);
      let Products = await db.Products.findOne({
        where: { id: data.id },
        raw: false,
      });
  
      if (Products) {
        // Add updated attributes here
        Products.Name = data.Name;
        Products.JobNo = data.JobNo;
        Products.Notes = data.Notes;
        Products.Type = data.Type;
        Products.Description = data.Description;
        Products.Area = data.Area;
        Products.WidthDim = data.WidthDim;
        Products.DepthDim = data.DepthDim;
        Products.LengthDim = data.LengthDim;
        Products.Weight = data.Weight;
        Products.QRCode = `Name: ${data.Name}, JobNo: ${data.JobNo}`;
  
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

export async function updateQRCode(ID, QRCode) {
    try {
        const QRCodeString = typeof QRCode === 'string' ? QRCode : JSON.stringify(QRCode);

        const product = await db.Products.update(
            { QRCode: QRCodeString },  // Convert QRCode to string explicitly
            { where: { id: ID } }
        );
        if (product[0]) { // Sequelize update returns an array where the first element is the number of affected rows
            return { status: 200, message: "QR code updated successfully", data: QRCode };
        } else {
            return { status: 404, message: "Product not found" };
        }
    } catch (error) {
        console.error("Error updating QR code in service:", error);
        return { status: 500, message: "Internal Server Error", error: error.message };
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