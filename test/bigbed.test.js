import BigBed from '../src/bigbed'

const LocalFile = require('../src/localFile')

describe('bigbed formats', () => {
  it('loads small bigwig file', async () => {
    const ti = new BigBed({
      filehandle: new LocalFile(require.resolve('./data/hg18.bb')),
    })
    await ti.getHeader()
    const feats = await ti.getFeatures('chr7', 0, 100000)
    expect(feats).toMatchSnapshot()
  })
})