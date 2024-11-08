import { getGuideDirectory, simpleLink } from './../helpers';

const support = () => {
  return {
    link: '/guides/support',
    title: 'Support and Troubleshooting',
    children: [
      getGuideDirectory('guides/support', 'Support'),
      getGuideDirectory(
        'guides/disaster-recovery',
        'Disaster Recovery Playbook',
      ),

      getGuideDirectory('guides/professional-services'),
      // Todo: relocate this to the support guide
      simpleLink('/oss-support-levels', 'Open Source Support Levels'),
      simpleLink('/basic-troubleshooting', 'Troubleshooting Errors', [
        simpleLink('/basic-troubleshooting', 'Basic Troubleshooting'),
        simpleLink('/modules-known-issues', 'Known Issues', [
          // @todo, combine some of these pages.
          simpleLink(
            '/modules-plugins-known-issues',
            'Modules and plugins with known issues',
          ),
          simpleLink('/modules-known-issues', 'Drupal Modules Known Issues'),
          simpleLink('/wordpress-known-issues', 'WordPress Known Issues'),
          simpleLink(
            '/plugins-known-issues',
            'WordPress Plugins and Themes with Known Issues',
          ),
          simpleLink(
            '/symlinks-assumed-write-access',
            'Symlinks and plugins that assume write access',
          ),
        ]),

        simpleLink('/timeouts', 'Timeouts and Errors', [
          simpleLink('/timeouts', 'Timeouts on Pantheon'),
          getGuideDirectory('guides/errors-and-server-responses'),
          simpleLink('/debug-connections', 'Debugging Connectivity Issues'),
        ]),

        simpleLink('/mime-types', 'MIME Types'),
        // @todo, this page is not loading??

        simpleLink('/resetting-passwords', 'Resetting Passwords'),
      ]),
      simpleLink('/debug-slow-performance', 'Troubleshooting Performance', [
        simpleLink('/debug-slow-performance', 'Debugging Slow Performance'),
        simpleLink('/debug-cache', 'Debugging Caching'),

        getGuideDirectory(
          'guides/new-relic',
          'New Relic Performance Monitoring',
        ),

        // Should could move to the education menu.
        getGuideDirectory('guides/frontend-performance'),
        simpleLink(
          '/load-and-performance-testing',
          'Load and Performance Testing',
          [
            simpleLink(
              '/load-testing-with-blazemeter',
              'Load Testing Drupal and WordPress with BlazeMeter',
            ),
            simpleLink('/bots-and-indexing', 'Bots and Indexing on Pantheon'),
          ],
        ),
      ]),
      simpleLink('/drupal-migration', 'Restructuring Drupal Codebases', [
        // Pages to audit and reconsider before adding to migration submenu
        simpleLink('/composer-convert'),
        simpleLink('/composer-convert-from-empty'),

        simpleLink('/drupal-to-build-tools'),
        simpleLink('/drupal-updates'),

        getGuideDirectory('guides/drupal/drupal-hosted', 'drupal-hosted'),
        getGuideDirectory('guides/drupal/drupal-unhosted', 'unhosted???'),
        getGuideDirectory(
          'guides/drupal/drupal-unhosted-composer',
          'unhosted-composer',
        ),
        getGuideDirectory(
          'guides/drupal/drupal-hosted-md',
          'drupal-hosted-multidev',
        ),
        getGuideDirectory(
          'guides/drupal/drupal-hosted-createempty-md',
          'drupal-hosted-createempty-md',
        ),
        getGuideDirectory(
          'guides/drupal/drupal-hosted-createdashboard-set8',
          'drupal-hosted-createdashboard-set8',
        ),
        getGuideDirectory(
          'guides/drupal/drupal-hosted-btworkflow',
          'drupal-hosted-btworkflow',
        ),

        getGuideDirectory(
          'guides/drupal/drupal-hosted-createbt',
          'drupal-hosted-createbt',
        ),
        getGuideDirectory(
          'guides/drupal/drupal-hosted-createcustom',
          'drupal-hosted-createcustom',
        ),
        simpleLink(
          '/switch-drupal-recommended-upstream',
          'Restructuring Drupal Codebases',
        ),

        simpleLink('/upgrade-drupal-with-ic-to-latest'),
        // Todo: relocate this page.
        {
          link: '/migrate-wordpress',
          title: 'Migrating WordPress Sites',
        },
        getGuideDirectory(
          'guides/migrate/manual-d8-composer-to-d8',
          'Manual d8 to d8',
        ),
      ]),
    ],
  };
};

export default support;
