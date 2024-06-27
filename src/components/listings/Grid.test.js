// import data from '../../data/courses.json';

// // beforeEach(() => console.log('connection setup'));
// // beforeEach(() => console.log('database setup'));

// // afterEach(() => console.log('database teardown'));
// // afterEach(() => console.log('connection teardown'));

// const numItems =  data.length;

// //Number Test
// describe("Number Test",()=>{
//   test("number is 12",()=>{
//     expect(numItems).toBe(12);
//   })
  
//   test("numerb is greater than 12",()=>{
//     expect(numItems).toBeGreaterThanOrEqual(12);
//   })
// })

// //String tests
// describe("String Test",()=>{
//   const dataTest = data[0].title;
//   test("There is a JS in the Title",()=>{
//     expect(dataTest).toMatch(/JS/);
//   })

//   test("The Title contains React",()=>{
//     expect(dataTest).toContain('React');
//   })
// })

// // Arrays & Objects test
// describe("Array and objects Test",()=>{
//   //To Arrays
//   const data2 = ["React Native","React"];
//   test("The List of courses contains Recat Native and React",()=>{
//       expect(["React Native","React"]).toEqual(expect.arrayContaining(data2));
//   })
  
//   //To Objects
//   test("The List of courses contains Recat Native and React",()=>{
//     expect(data[0]).toHaveProperty("title");
//   })
  
//   test("The first course to have property title and value of 31,266",()=>{
//     expect(data[0]).toHaveProperty("views","31,266");
//   })
// })

