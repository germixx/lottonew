const mongoDB = require('../../../../../util/mongodb')

const getSessionData = (date) => {
    
    return new Promise((resolve, reject) => {

        mongoDB.collection("official").findOne({ sessionDate: date }, function (err, result) {

            if (err) throw err

            if (result !== null) {
                resolve({ status: true, data: result })
            } else {
                resolve({ status: false, data: result })
            }

        })

    }).catch(e => console.log(e))
}

export async function GET(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
  }
  
  export async function POST(request, res) {

    let daReq = await request.json();
    
    let ress = await getSessionData(daReq.date);

    return Response.json( {ress} , { status: 200});
    
  }
  
  export async function PUT(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405});
  }

  