import { module, test } from 'qunit';
import { visit } from '@ember/test-helpers';
import { setupApplicationTest } from 'dummy/tests/helpers';
import { a11yAudit } from 'ember-a11y-testing/test-support';

module('Acceptance | Component | hds/reveal', function (hooks) {
  setupApplicationTest(hooks);

  test('Components/hds/reveal page passes automated a11y checks', async function (assert) {
    await visit('/components/reveal');
    await a11yAudit();

    assert.ok(true, 'a11y automation audit passed');
  });
});
