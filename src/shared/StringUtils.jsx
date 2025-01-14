export const clone = (o) => JSON.parse(JSON.stringify(o)) 
export const generateUid = (g,b,d) => {
    const uId =
        g?.replace(/ +/g, "")?.substring(0, 3) +
        "_" +
        b?.replace(/ +/g, "")?.substring(0, 3) +
        "_" +
        d;
        return uId
}
