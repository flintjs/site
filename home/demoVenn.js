export const DemoVenn = () => $(
  <Example flip inPage
    inStyle={{ width: 160 }}
    in={
      <Editor lines={14} left light source={`
      export const Venn = () => $(
        <circle class="red" />
        <circle class="blue" />

        : { flexFlow: 'row' }
        blue: { background: 'blue' }
        red: { background: 'red' }
        circle: {
          borderRadius: 100,
          width: 200, height: 200,
          margin: ['auto', -40],
          opacity: 0.5
        }
      }
      `} />
    }
    out={
      <Venn />
    } />
}

export const Venn = () => $(
  <one class="circle" />
  <two class="circle" />

  : {
    flexFlow: 'row',
    margin: 'auto',
    width: 240
  }

  one: { background: 'blue' }
  two: { background: 'red' }

  circle: {
    width: 200,
    height: 200,
    flexShrink: 0,
    margin: ['auto', -40],
    opacity: 0.5,
    borderRadius: 100
  }
}
