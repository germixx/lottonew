export async function GET(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
}

export async function POST(request, res) {
    
    let REQ = await request.json();
    
    if (REQ.string == 'axlpoeushdngtuesl') {
        
        const subProcess = require('child_process');

        subProcess.exec('/var/www/lottonew/scripts/Python/env/lotto/bin/python3 /var/www/lottonew/scripts/Python/env/lotto/scripts/US/Florida/MongoSession/index.py', '', function(err, stdout, stderr) {
           
            // handle err, stdout, stderr
            console.log(err, ' is err');
            console.log(stdout, ' is out');
            console.log(stderr, ' is stderr');
            
        });

        return Response.json({ status: true });
        
    }

}

export async function PUT(request, res) {
    return Response.json({ message: 'Method Not Allowed' }, { status: 405 });
}