import bcrypt from 'bcrypt';
const salt = bcrypt.genSaltSync(10);

export async function  hashString(text) {
    return await bcrypt.hashSync(text, salt);
}
export async function  hashCompare(text,texthash) {
    return  await bcrypt.compareSync(text, texthash);
}


