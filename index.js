// Require datejs outside the function
require('datejs');

function combineUsers(...args) {
  // Step 2: Initialize the Return Object
  const combinedObject = {
    users: []
  };

  // Step 3 & 4: Loop through args and use the spread operator to merge arrays
  for (let i = 0; i < args.length; i++) {
    combinedObject.users.push(...args[i]);
  }

  // Step 5: Get today's date using datejs in the M/d/yyyy format
  combinedObject.merge_date = Date.today().toString('M/d/yyyy');

  // Step 7: Return object
  return combinedObject;
}

module.exports = combineUsers;


module.exports = {
  ...(typeof combineUsers !== 'undefined' && { combineUsers })
};