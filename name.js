'use strict'

module.exports = function (name) {

  let fullName = name || null;
  console.log();
  if (!fullName) return 'Invalid fullname';
  if (fullName.match(/[0-9_]/g)) return 'Invalid fullname';

  let shortName = null;
  let aName = fullName.split(' ');

  switch (aName.length) {
    case 1:
      shortName = `${aName[0]}`;
      break;
    case 2:
      shortName = `${aName[1]} ${aName[0].slice(0,1)}.`;
      break;
    case 3:
      shortName = `${aName[2]} ${aName[0].slice(0,1)}. ${aName[1].slice(0,1)}.`;
      break;
    default:
      shortName = 'Invalid fullname';
  }

  return shortName;

};
