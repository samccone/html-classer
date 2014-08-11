fs      = require("fs")
path    = require("path")
chai    = require("chai")
mocha   = require("mocha")
classer = require("../")

chai.should()

describe "adding a class to every node", ->
  it "should add a class", ->
    input     = fs.readFileSync(path.join(__dirname, "fixtures/simple.html"), "utf8")
    expected  = fs.readFileSync(path.join(__dirname, "fixtures/simple-expected.html"), "utf8")

    classer(input, {klass: "bkr"}).replace(/\n/gm, "")
    .should.eql(expected.replace(/\n/gm, ""))
