import supertest from 'supertest';
import { expect } from 'chai'
const request = supertest('https://qa-interview-api.migo.money/');

let token;
let clients;

describe('Users', () => {
    it('POST /token', (done) => {
        request
           .post("token")
           .auth('egg', 'f00BarbAz!')
           .end((err, res) => {
            expect(res.status).to.equal(200);  
            token  = res.body.key;
            console.log(err);
            console.log(token); 
            done();
        });
    });
})


describe('Clients', () => {
    it('GET /All clients', (done) => {
        request
           .get("clients/")
           .set('Accept', 'application/json')
           .set('X-API-KEy', token)
           .end((err, res) => {
            expect(res.status).to.equal(200);  
            clients  = res.body.clients;
            console.log(err);
            console.log(clients); 
            done();
    });
});
})

describe('Clients', () => {
    it('GET /clientOne/ID', (done) => {
        request
           .get("client/ebfe88fec7fc")
           .set('Accept', 'application/json')
           .set('X-API-KEy', token)
           .end((err, res) => {
            expect(res.status).to.equal(200);  
            clients  = res.body;
            console.log(err);
            console.log(clients); 
            done();
    });
});
})

describe('Clients', () => {
    it('GET /clientTwo/ID', (done) => {
        request
           .get("client/3f691f22aa8f")
           .set('Accept', 'application/json')
           .set('X-API-KEy', token)
           .end((err, res) => {
            expect(res.status).to.equal(200);  
            clients  = res.body;
            console.log(err);
            console.log(clients); 
            done();
    });
});
})

describe('Clients', () => {
    it('PUT /clientOne/Update lastName', (done) => {
        request
           .put("client/ebfe88fec7fc")
           .set('Accept', 'application/json')
           .set('X-API-KEy', token)
           .send({
            firstName: 'Ricky',
            id: 'ebfe88fec7fc',
            lastName: 'Jenkins',
            phone: '+48 800 190 590'
           })
           .end((err, res) => {
            expect(res.status).to.equal(200);  
            clients  = res.body;
            console.log(err);
            console.log(clients); 
            done();
    });
});
})

let ID_New_Client;

describe('Clients', () => {
    it('POST /client/Add new client', (done) => {
        request
           .post("client")
           .set('Accept', 'application/json')
           .set('X-API-KEy', token)
           .send({
            firstName: 'Hector',
            id: 'egfe89fec7ft',
            lastName: 'Merayo',
            phone: '+99 899 199 599'
           })
           .end((err, res) => {
            expect(res.status).to.equal(200);  
            ID_New_Client  = res.body.id;
            clients  = res.body;
            console.log(err);
            console.log(clients); 
            done();
    });
});
})


describe('Clients', () => {
    it('DELETE/A client', (done) => {
        request
           .delete(`client/${ID_New_Client}`)
           .set('Accept', 'application/json')
           .set('X-API-KEy', token)
           .end((err, res) => {
            expect(res.status).to.equal(200);  
            clients  = res.body;
            console.log(err);
            console.log(clients); 
            done();
    });
});
})





