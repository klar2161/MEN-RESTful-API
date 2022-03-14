
const chai = require('chai');
const expect = chai.expect;
const should = chai.should();
const chaiHttp = require('chai-http');
const server = require('../server');

chai.use(chaiHttp);




describe('/First Test Collection', () => {

    it('test default API welcome route...', (done) => {

        chai.request(server)
        .get('/api/welcome')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('object');
            const actualValue = res.body.message;
            expect(actualValue).to.be.equal('Welcome to the MEN REST API');
            done();
        });
    });

    it('should verify that we have 0 products in he DB', (done) => {

        chai.request(server)
        .get('/api/cats')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(0);
            done();
        });
    });

    it('shold POST a valid post of a cat', (done) => {

        let cat = {
            breed: "Test----",
            age: 10,
            gender: "Test----",
            indoorCat: true
        }

        chai.request(server)
        .post('/api/cats')
        .send(cat)
        .end((err, res) => {
            res.should.have.status(201);
            done();
        });
    });

    it('should verify that we have 1 products in he DB', (done) => {

        chai.request(server)
        .get('/api/cats')
        .end((err, res) => {
            res.should.have.status(200);
            res.body.should.be.a('array');
            res.body.length.should.be.eql(1);
            done();
        });
    });

    it('should test two values ..', () => {
        //actual test content here

    });
})