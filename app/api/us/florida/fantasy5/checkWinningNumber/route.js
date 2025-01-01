const { 
  checkNumberz
} = require('../../../../../../util/functions/us/florida/dbfunc')

export async function POST(request, res) {

  let REQ = await request.json();

  let num = REQ.number;

  let result = await checkNumberz(num);
  
  return Response.json({ result });

}

export async function GET(request, res) {
  return Response.json({ message: 'Method Not Allowed' }, { status: 405});
}
  
export async function PUT(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
}