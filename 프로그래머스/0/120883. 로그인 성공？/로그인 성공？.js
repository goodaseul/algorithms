function solution(id_pw, db) {
    let message = "";
    const [id, pw] = id_pw;
    for( let i = 0; i < db.length; i ++){
        const [dbId, dbPw] = db[i];
        
        if (id === dbId) {
            if (pw === dbPw) return "login";
            return "wrong pw";
        }
    }

    return "fail";
}