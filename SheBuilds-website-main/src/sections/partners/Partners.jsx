import './Partners.css'
import codeOnJvmChennai from '../../assets/code-on-jvm-chennai.png'
import aiGeeks from '../../assets/ai-geeks.png'
import nammaFlutter from '../../assets/namma-flutter.png'
import chennaiReactJs from '../../assets/chennai-reactjs.png'
import wyntrix from '../../assets/wyntrix.png'
import mastra from '../../assets/mastra.png'
import balsamiq from '../../assets/balsamiq.png'
import navan from '../../assets/navan.png'
import fossUnitedChennai from '../../assets/foss-united-chennai.png'
import developerCommunity from '../../assets/chennai-dev-community.png'
import codingCommunity from '../../assets/coding-community.png'
import elevenLabs from '../../assets/elevenlabs.png'
import happyFox from '../../assets/happyfox.png'
import sponsorMark from '../../assets/sponsor-mark.png'
import github from '../../assets/github.png'
import azureDeveloperCommunity from '../../assets/azure-developer-community.png'
import friendsOfFigmaChennai from '../../assets/friends-of-figma-chennai.png'
import communityPartnerD from '../../assets/community-partner-d.png'
import notion from '../../assets/notion.png'
import ccl from '../../assets/ccl.png'
import zuntraDigital from '../../assets/zuntra-digital.png'
import kottraAi from '../../assets/kottra-ai.png'
import mako from '../../assets/mako.png'
import xyzDomain from '../../assets/xyz-domain.png'
import interviewBuddy from '../../assets/interview-buddy.png'

const communityPartners = [
  { name: 'CODE ON JVM Chennai', logo: codeOnJvmChennai },
  { name: 'AI Geeks', logo: aiGeeks },
  { name: 'Namma Flutter', logo: nammaFlutter },
  { name: 'Chennai ReactJS', logo: chennaiReactJs },
  { name: 'FOSS United Chennai', logo: fossUnitedChennai },
  { name: 'Developer Community', logo: developerCommunity },
  { name: 'Coding Community', logo: codingCommunity },
  { name: 'Azure Developer Community', logo: azureDeveloperCommunity },
  { name: 'Friends of Figma Chennai', logo: friendsOfFigmaChennai },
  { name: 'Developer Partner', logo: communityPartnerD },
]
const partners = [
  { name: 'Wyntrix', logo: wyntrix },
  { name: 'Mastra', logo: mastra },
  { name: 'Balsamiq', logo: balsamiq },
  { name: 'Navan', logo: navan },
  { name: '.xyz', logo: xyzDomain },
  { name: 'Interview Buddy', logo: interviewBuddy },
]
const sponsors = [
  { name: 'ElevenLabs', logo: elevenLabs },
  { name: 'HappyFox', logo: happyFox },
  { name: 'Sponsor', logo: sponsorMark },
  { name: 'GitHub', logo: github },
  { name: 'Notion', logo: notion },
  { name: 'CCL', logo: ccl },
  { name: 'Zuntra Digital', logo: zuntraDigital },
  { name: 'Kottra.ai', logo: kottraAi },
  { name: 'MAKO', logo: mako },
]

export default function Partners({ compact = false }) {
  return (
    <section className={`partners${compact ? ' partners--compact' : ''}`} aria-labelledby="partners-heading">
      {!compact && (
        <h2 id="partners-heading" className="about__heading partners__heading" data-reveal>
          Partners
        </h2>
      )}

      <div className="partners__groups">
        <section className="partners__group" aria-labelledby="community-partners-heading">
          <h3 id="community-partners-heading" className="partners__group-heading" data-reveal>
            Community Partners
          </h3>
          <div className="partners__grid" data-reveal>
            {communityPartners.map((partner) => (
              <div className="partners__logo-slot partners__logo-slot--partner" key={partner.name}>
                <img src={partner.logo} alt={`${partner.name} logo`} className="partners__logo" />
                <span className="partners__name">{partner.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="partners__group" aria-labelledby="partners-group-heading">
          <h3 id="partners-group-heading" className="partners__group-heading" data-reveal>
            Partners
          </h3>
          <div className="partners__grid" data-reveal>
            {partners.map((partner) => (
              <div className="partners__logo-slot partners__logo-slot--partner" key={partner.name}>
                <img src={partner.logo} alt={`${partner.name} logo`} className="partners__logo" />
                <span className="partners__name">{partner.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className="partners__group" aria-labelledby="sponsors-heading">
          <h3 id="sponsors-heading" className="partners__group-heading" data-reveal>
            Sponsors
          </h3>
          <div className="partners__grid" data-reveal>
            {sponsors.map((sponsor) => (
              <div className="partners__logo-slot partners__logo-slot--partner" key={sponsor.name}>
                <img src={sponsor.logo} alt={`${sponsor.name} logo`} className="partners__logo" />
                <span className="partners__name">{sponsor.name}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </section>
  )
}
