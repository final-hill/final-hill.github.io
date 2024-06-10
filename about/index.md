<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: '/assets/michael-l-haufe-profile.jpg',
    name: 'Michael L. Haufe',
    title: 'Founder & President',
    links: [
        {
            icon: {
                svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-file-text"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>`
            },
            link: '/about/michael-l-haufe'
        },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/michaelhaufe/' },
      {
         icon: {
            svg: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-link"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>`
          },
          link: 'https://thenewobjective.com'
        }
    ]
  }
]
</script>

# About

## Vision

The future of human endeavors must be built upon a foundation of structured requirements, empowering us to transform ambiguity into clarity and chaos into coherence. In this world requirements serve as the guiding pillars for all endeavors, shaping success with precision and purpose. They will drive strategic direction, innovation, and success, shaping the future with clarity, coherence, and confidence.

## Mission

Our mission is to empower individuals and organizations to embrace structured requirements as the cornerstone of success in their endeavors. Through innovative tools, comprehensive training, and expert support, we enable our users to transform ambiguity into clarity and chaos into coherence. We are committed to providing a platform where requirements serve as the guiding pillars for strategic direction, innovation, and success, driving tangible outcomes with clarity, coherence, and confidence. Our goal is to envangelize a new standard where structured requirements shape the future of human endeavors, unlocking potential and driving progress worldwide.

## Situation

## The Team

<VPTeamMembers :members="members" />
