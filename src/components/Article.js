// import React from "react";

// function Article() {
//   return (
//     <div>
//       {"please pass this test"}
//     </div>
//   );
// }

// export default Article;

// src/__tests__/Article.test.js
test("displays the text 'please pass this test'", () => {
  render(<Article />);

  // add this line
  screen.debug();

  expect(screen.queryByText("please pass this test")).toBeInTheDocument();
});
