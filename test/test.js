const { expect } = require('chai')
const chai = require('chai')
const mocha = require('mocha')

const { main } = require('../src/index')

describe('[unit] widget tests', function () {
  it('succeeds with modern widget data', function () {
    const source = [{
      id: 3,
      widget: {
        type: 1,
        name: 'cartman',
      },
    }]

    const result = main(source)

    expect(result.length).to.equal(1)
    expect(result).to.deep.equal([{
      id: 3,
      type: 1,
      name: 'cartman',
    }])
  })

  it.skip('succeeds with both modern and legacy widgets', function () {
    const source = [{
      id: 3,
      widget: {
        type: 1,
        name: 'cartman',
      },
    }, {
      id: 2,
      widget_legacy: '01_kyle',
    }, {
      id: 1,
      widget_legacy: '01_stan',
    }, {
      id: 4,
      widget: {
        type: 1,
        name: 'kenny',
      },
    }, {
      id: 5,
      widget: {
        type: 2,
        name: 'butters',
      },
    }]

    const result = main(source)

    expect(result.length).to.equal(5)
    expect(result).to.deep.equal([{
      id: 3,
      type: 1,
      name: 'cartman',
    }, {
      id: 2,
      type: 1,
      name: 'kyle',
    }, {
      id: 1,
      type: 1,
      name: 'stan',
    }, {
      id: 4,
      type: 1,
      name: 'kenny',
    }, {
      id: 5,
      type: 2,
      name: 'butters',
    }])
  })

  it.skip('succeeds with mixed source array', function () {
    const source = [
      [{
        id: 3,
        widget: {
          type: 1,
          name: 'cartman',
        },
      }, {
        id: 2,
        widget_legacy: '01_kyle',
      }],
      {
        id: 1,
        widget_legacy: '01_stan',
      },
      [{
        id: 4,
        widget: {
          type: 1,
          name: 'kenny',
        },
      }, {
        id: 5,
        widget: {
          type: 2,
          name: 'butters',
        },
      }],
    ]

    const result = main(source)

    expect(result.length).to.equal(5)
    expect(result).to.deep.equal([{
      id: 3,
      type: 1,
      name: 'cartman',
    }, {
      id: 2,
      type: 1,
      name: 'kyle',
    }, {
      id: 1,
      type: 1,
      name: 'stan',
    }, {
      id: 4,
      type: 1,
      name: 'kenny',
    }, {
      id: 5,
      type: 2,
      name: 'butters',
    }])
  })

  it.skip('succeeds with deeply nested source data', function () {
    const source = [
      [{
        id: 3,
        widget: {
          type: 1,
          name: 'cartman',
        },
      }, [{
        id: 2,
        widget_legacy: '01_kyle',
      }]],
      {
        id: 1,
        widget_legacy: '01_stan',
      },
      [[{
        id: 4,
        widget: {
          type: 1,
          name: 'kenny',
        },
      }, {
        id: 5,
        widget: {
          type: 2,
          name: 'butters',
        },
      }]]
    ]

    const result = main(source)

    expect(result.length).to.equal(5)
    expect(result).to.deep.equal([{
      id: 3,
      type: 1,
      name: 'cartman',
    }, {
      id: 2,
      type: 1,
      name: 'kyle',
    }, {
      id: 1,
      type: 1,
      name: 'stan',
    }, {
      id: 4,
      type: 1,
      name: 'kenny',
    }, {
      id: 5,
      type: 2,
      name: 'butters',
    }])
  })
})
