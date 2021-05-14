function del(a,b){
    return a*b;
}

describe('del a/b', ()=>{
    it("argiment", ()=>{
        expect(del(10,5)).toBe(50);
    })
})