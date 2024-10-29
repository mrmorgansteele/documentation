import { getGuideDirectory, simpleLink } from './../helpers';

const support = () => {
  return {
    link: '/guides/support',
    title: 'Support and Troubleshooting',
    children: [
      getGuideDirectory('guides/support', 'Support'),
      simpleLink('/resetting-passwords', 'Resetting Passwords'),
      simpleLink('/ssh-keys', 'SSH Keys'),
      getGuideDirectory('guides/professional-services'),
      simpleLink('/oss-support-levels', 'Open Source Support Levels'),
      simpleLink('/troubleshoot', 'Troubleshooting', [
        simpleLink('/basic-troubleshooting', 'Basic Troubleshooting'),
        simpleLink('/timeouts', 'Timeouts on Pantheon'),
        simpleLink('/debug-connections', 'Debugging Connectivity Issues'),
        getGuideDirectory('guides/errors-and-server-responses'),
        getGuideDirectory(
          'guides/disaster-recovery',
          'Disaster Recovery Playbook',
        ),
        simpleLink('/mime-types', 'MIME Types'),
        simpleLink('/http-to-https', 'Switching Sites from HTTP to HTTPS'),
        // @todo, this page is not loading??
        simpleLink('/debug-slow-performance', 'Debugging Slow Performance'),
        simpleLink('/bots-and-indexing', 'Bots and Indexing on Pantheon'),
        simpleLink('/load-and-performance-testing', 'Load and Performance Testing'),
        simpleLink('/load-testing-with-blazemeter', 'Load Testing Drupal and WordPress with BlazeMeter'),
        simpleLink(
          '/modules-plugins-known-issues',
          'Modules and plugins with known issues',
        ),
      ]),
    ],
  };
};

export default support;
