/**
 * Get profile function
 */

const { getProfile } = require('./functions/users/getProfile')



/**
 * Get level function
 */

 const { getLevel } = require('./functions/levels/getLevel')

 getLevel("128").then(res => {
    console.log(res)
})