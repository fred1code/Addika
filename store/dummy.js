const db = {
    'user':[
        {id:1, name:'alfredo'}
    ]
};

function list(tabla,) {
    return db[tabla];
}
function get(tabla,id) {
    let col = list(tabla);
    return col.filter(item => item.id===id) [0] || null;

}
function upsert(data) {
    db[collection].push(data);

}
function remove(id) {
    return true

}


module.exports={
    list,
    get,
    upsert,
    remove,
};