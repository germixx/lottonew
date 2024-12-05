const { 
    getLatestEntryMid
  } = require('../../../../../../../util/functions/us/florida/dbfunc')

// import getLatestEntry from '../../../../../../util/functions/us/florida/dbfunc';

export async function GET(req) { 

    let answer = await getLatestEntryMid();

    return Response.json({status: 200, answer})

}

// add fantasy5 numbers from admin dashboard
export async function POST(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
  }
  
  export async function PUT(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
  }