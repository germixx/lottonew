// const connection = require('../../../../../util/db')

const { 
  selectAllFromF5Mid, 
  selectAllFromF5Eve, 
  selectDataByNumbMid, 
  selectDataByNumbEve 
} = require('../../../../../util/functions/us/florida/dbfunc')

function arrangeNumbSeq(seq) {

  let arr = seq.split('-')

  arr.sort((a, b) => a - b);

  return arr.join('-')

}

// DB - FLFantasy5
// Tables - evening, midday

// Example

// export const users = [
//     { id: 1, name: "Donald Trump"},
//     { id: 2, name: "Barron Trump"}
// ]

// export async function GET() {
//     return Response.json(users)
// }

// export async function POST(request) {
//    const user = await request.json()
//    const newUser = {
//         id: users.length + 1,
//         name: user.name
//    }
//    users.push(newUser)
//    return new Response(JSON.stringify(newUser), {
//     headers: {
//         "Content-Type": "applications/json",
//     },
//     status: 201
//    })
// }


// EX: https://dev.kovonix.com/api/us/florida/fantasy5?q=y&day=mid&nums=(sequence goes here)

export async function GET(req) {

  function urlSearchParamsToObject(searchParams) {
    const params = {};
    for (const [key, value] of searchParams.entries()) {
      params[key] = value;
    }
    return params;
  }
  
  const searchParams = new URLSearchParams(req.url);
  const paramsObject = urlSearchParamsToObject(searchParams);

  // params objects
  // paramsObject.day
  // paramsObject.nums

  // link has two options 
  // give back all numbers, or give back number data  by number sequence
  // must search by time of day first

  if(paramsObject.day === 'mid') { 
    
    if(paramsObject.nums === 'undefined' || paramsObject.nums === undefined) {

      const numbersss = await selectAllFromF5Mid();

      return Response.json(numbersss)

    } else {

      if(paramsObject.nums.length > 5) {

        const numbars = await selectDataByNumbMid(arrangeNumbSeq(paramsObject.nums))
        
        return Response.json(numbars)
  
      }

    }

  } else {

    if(paramsObject.nums === 'undefined' || paramsObject.nums === undefined) { 

      const numbersss = await selectAllFromF5Eve();

      return Response.json(numbersss)

    } else {

      if(paramsObject.nums.length > 5) {

        const numbars = await selectDataByNumbEve(arrangeNumbSeq(paramsObject.nums))
        
        return Response.json(numbars)
  
      }     

    }

  }

}

// add fantasy5 numbers from admin dashboard
export async function POST(request, res) {
  return Response.json({ message: 'Method Not Allowed' }, { status: 405});
}

export async function PUT(request, res) {
  return Response.json({ message: 'Method Not Allowed' }, { status: 405});
}