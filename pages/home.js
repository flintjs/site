view Home {
  <Blur left="45%" top={-200} />
  <Header />
  <welcome>
    Welcome to the Flint private beta. We are getting ready for launch
    and preparing a demo video for here. For now, you'll have to
    dive in yourself!
  </welcome>
  <Install title />
  <Video if={false} />
  <Examples />
  <Features />
  <DemoVideo />
  <Slack />
  <FAQ />
  <Signup />
  <Footer />

  $ = { width: '100%' }

  $welcome = {
    margin: [80, 'auto', 30],
    textAlign: 'center',
    maxWidth: 450,
    zIndex: 100
  }
}

view Video {
  <browser />
  <editor />

  $ = {
    flexFlow: 'row',
    justifyContent: 'center'
  }

  const shared = {
    width: 498,
    margin: [50, 4, 0],
    borderRadius: 10,
    height: 410,
    boxShadow: '0 0 6px rgba(0,0,0,0.1)'
  }

  $editor = [shared, {

  }]

  $browser = [shared, {

  }]
}

view Intro {
  <Contain yield />

  $ = {
    fontWeight: 300,
    fontSize: 28,
    padding: [20, 0],
    margin: [30, 0],
    border: '1px dotted #ddd',
    borderLeft: 'none',
    borderRight: 'none'
  }

  $Contain = {
    textAlign: 'center'
  }

  $p = {
    margin: [7, 0]
  }

  $.strong = {
    fontSize: 34,
    marginBottom: 12,
  }
}

view Home.Examples {
  <Contain>
    <section>
      <Blur />
      <Interlude center left>
        Flint introduces the view to ES6
      </Interlude>

      <DemoCounter />

    </section>

    <section>
      <Blur left="60%" />
      <Interlude center>
        Style views with ease...
      </Interlude>

      <DemoVenn />
    </section>

    <section>
      <Blur />
      <Interlude center>
        Flint runs on ES6, npm & React
      </Interlude>

      <DemoCircles />
    </section>
  </Contain>

  $ = {
    // padding: [0, 0, 40],
    margin: [0, 'auto', 40],
    width: '100%',
    maxWidth: 980,
    position: 'relative',
    zIndex: 0
  }

  $section = {
    position: 'relative'
  }
}

view Example {
  <Contain maxWidth={^maxWidth || 1000}>
    <in>{^in}</in>
    <out>{^out}</out>
  </Contain>

  $ = {
    flexFlow: 'row',
    flexGrow: 1,
    alignItems: 'space-between',
    justifyContent: 'center',
    WebkitTapHighlightColor: 'rgba(0,0,0,0)',

    [device.small]: {
      flexFlow: 'column'
    }
  }

  $out = [{
    flexGrow: 2,
    justifyContent: 'center',
    position: 'relative',
    order: ^flip ? 2 : 1,

    [device.small]: {
      width: '100%',
      order: ^flipVertical ? 1 : 2,
      padding: ^inPage ? '50px 0' : 0
    }
  }, ^outStyle]

  $in = [{
    flexGrow: 1,
    order: ^flip ? 1 : 2,
    zIndex: 10,
    margin: 0,

    [device.small]: {
      width: '90%',
      margin: 'auto',
      order: ^flipVertical ? 2 : 1
    }
  }, ^inStyle]
}

view Slack {
  <Contain id="slack">
    <Interlude center>Join us on Slack!</Interlude>
    <iframe seamless="seamless" src="https://flint-slack.herokuapp.com/"></iframe>
  </Contain>

  $iframe = {
    border: 'none',
    width: '100%',
    height: 240,
    overflow: 'hidden'
  }

  $ = {
    marginBottom: 20
  }
}