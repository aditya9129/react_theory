import { sum } from "../sum";
test("testing the sum",()=>{
    const result=sum(3,4);
    //assertion
    expect(result).toBe(7);
})