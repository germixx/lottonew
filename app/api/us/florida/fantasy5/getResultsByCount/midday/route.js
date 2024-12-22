const { 
    getResultsByCount
  } = require('../../../../../../../util/functions/us/florida/dbfunc')

export async function GET(req) { 

    let answer = await getResultsByCount("midday", 20);

    return Response.json({status: 200, answer})

}

export async function POST(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
  }
  
  export async function PUT(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
  }