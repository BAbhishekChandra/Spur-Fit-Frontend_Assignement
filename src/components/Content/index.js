import { Timeline } from "rsuite";

import { Chrono } from "react-chrono";

const items = [
  {
    title: '',
    cardTitle: 'Answer questions on your social skills',
    cardSubtitle: '',
  },
  {
    title: '',
    cardTitle: 'Let others anonymously answer the same questions about you',
    cardSubtitle: '',
  },
  {
    title: '',
    cardTitle: 'Find out where you and others see things the same way - and where not!.',
    cardSubtitle: '',
  },
];

const Content = () => {
    return (
        <>
        <div>
  <div>
    <h1>Your Heading</h1>
    <p>Your Paragraph Content</p>
    <button>
        <img src="" alt="Apple Logo" />Download on the App Store</button>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
    <span>&#9733;</span>
  </div>
</div>

<div>
<h2>EQ beats IQ</h2>
<p>People with high emotional intelligence (EQ) live more fulfilled lives. They tend to be happier and have healthier relationships.</p>
<p>They are more successful in their pursuits and make for inspiring leaders. According to science, they earn $29k a year.</p>
</div>


<div>
  <h2>Does this sound familiar...</h2>
  <div>
    <div>
      <p>Squabble with your partner</p>
      <p>Because them of doing that thing you they always do it!), instead of calm and addressing their. </p>
    </div>
    <div>
      <p>You argue with a colleague</p>
      <p>You get angry and defensive, instead of staying open and working towards common ground.</p>
    </div>
    <div>
      <p>You get a promotion at work</p>
      <p>You question yourself and wonder when they'll realize you're an unqualified imposter, instead of trusting yourself & your abilities.</p>
    </div>
    <div>
      <p>You attend a class reunion</p>
      <p>You compare yourself with your achievements, instead of making self-judgement more independent other.</p>
    </div>        
  </div>
  <div>
    <p>Built out of frustration</p>
    <h2>Meet the ahead app</h2>
    <div>
      <img alt = "emoji"/>
      <div>
        <p>A personalized pocket coach that provides bit-sized, science-driven tools to boost emotional intelligence.</p>
        <p>Think of it as a pocket cheerleader towards a better, more fulfilling.</p>
      </div>
    </div>
  </div>

  <div>
    <p>Wrong with self-improvement & how we're fixing it.</p>
    <h2>Self-improvement. Ugh.</h2>
  </div>   

  <div>
    <Timeline>
      <Timeline.Item><p>It's not as easy as 1-2-3</p> <p>The journey of change may be long, but our sessions are quick. We get to the point and tell you what you want to know (and nothing else).</p></Timeline.Item>
      <Timeline.Item><p>Old habits are hard to break.</p><p>And bad behaviors die hard. Fortunately, we give you great, science-backed techniques to use.</p></Timeline.Item>
      <Timeline.Item><p>You and your motivation don't have a long-term relationship</p><p>Luckily, we can proactively prepare you for the marathon, not just the race. Effective, memrable exercises will help you stick to your goals.</p></Timeline.Item>
      <Timeline.Item><p>Books just don't offer practical solutions.</p><p>Remember when you learned to ride a hike just by reading? Yeah, we don't either.</p></Timeline.Item>
    </Timeline>
  </div>

  <div>
    <h2>Be the best you with EQ</h2>
    <p>Not having your own emotions under control might be holding you back.</p>
    <p>Additionally, not understanding those of others stops you from being parent, friend you can be.</p>
  </div>

  <div>
    <p>Let your friends, family, and co-workers (anonymously) rate your social skills.</p>
    <h2>Ever wondered what others think of you?</h2>
    <div style={{ width: '600px', margin: 'auto' }}>
      <Chrono items={items} mode="HORIZONTAL" slideItemDuration={1000} slideShow loop={false}/>
    </div>
    <div style={{ width: '600px', margin: 'auto' }}>
      <Chrono items={items} mode="HORIZONTAL" slideItemDuration={1000} slideShow loop={false}/>
    </div>
  </div>

  <div>
    <p>We take privacy seriously</p>
    <h2>Before you get started</h2>
    <p>"We won't share your answers with anyone (and won't ever tell you which friends said what about you)"</p>
    <p>with love, <img alt = "signature"/></p>
    <button type = "button">Start a test</button>
    <p>Take only 5 minutes</p>
  </div>

  <div>
    <div>
      <p>Work with us</p>
      <p>ahead</p>
    </div>
    <div>
    <div>
      <div>
        <img alt = "emoji"/>
        <h6>Ahead</h6>
        <p>At ahead our goal is to make self-improvement fun and lasting. We know there's a way how to make it work. And that's what aHead is all about!</p>
      </div>
      <div>
        <h6>Product</h6>
        <p>Sure, you could spend ages reading books or sittings in seminars on how to become a better spouse, parent, or manager - like we did...</p>
      </div>
    </div>
    
    <div>
      <div>
        <h6>Power through, even when the going get tough</h6>
        <p>We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
      </div>
      <div>
        <h6>Learn more about who you are and where you want to go</h6>
        <p>We ask the right questions to help you better understand why you do things the way you do.</p>
      </div>
      <div>
        <h6>Play and grow together with others on the same journey</h6>
        <p>Ahead feels like a game, not like a chore, See yourself grow every day towards achieving your goals!</p>
      </div>
    </div>
    <div>
        <h6>Power through, even when the going get tough</h6>
        <p>We help you spot and work around whatever stands in the way, be it bad habits, fears, etc.</p>
      </div>
      <div>
        <h6>Learn more about who you are and where you want to go</h6>
        <p>We ask the right questions to help you better understand why you do things the way you do.</p>
      </div>
      <div>
        <h6>Play and grow together with others on the same journey</h6>
        <p>Ahead feels like a game, not like a chore, See yourself grow every day towards achieving your goals!</p>
      </div>
    </div>
  </div>

  <div>
    <h2>Open vacancies</h2>
    <div>
      <div>
        <p>Senior Full-Stack Engineer</p>
        <ul>
          <li>Full-time position</li>
          <li>Berlin or remote</li>
          <li>e65-85k, 0.5-1.50% equity share options</li>
        </ul>
      </div>
      <div>
        <p>Senior Designer</p>
        <ul>
          <li>Full-time position</li>
          <li>Berlin or remote</li>
          <li>e40-55k, 0.25-0.50% equity share options</li>
        </ul>
      </div>
      <div>
        <p>Superstar Intern</p>
        <ul>
          <li>Full-time position</li>
          <li>Berlin or remote</li>
          <li>e20-24k, 0.5-1.50% equity share options</li>
        </ul>
      </div>
    </div>
  </div>
</div>
</>
    );
};

export default Content