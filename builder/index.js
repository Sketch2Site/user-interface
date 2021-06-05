const {
  getCover,
  getLeftHero,
  getNavbar,
  getParagraph,
  getRightHero,
  putIntoLayout,
} = require("./templates");

/**
 * expects a simple object that mentions what's needed and what's not
 */

const siteBuilder = (testDocument) => {
  const { cover, navbar, leftHero, rightHero, paragraph } = testDocument;

  let data = "";

  data += navbar === true ? getNavbar() : " ";
  data += cover === true ? getCover() : " ";
  data += leftHero === true ? getLeftHero() : " ";
  data += rightHero === true ? getRightHero() : " ";
  data += paragraph === true ? getParagraph() : " ";

  return putIntoLayout(data);
};

module.exports = { siteBuilder };
