import '@glint/environment-ember-loose';

import { LinkTo } from '@ember/routing';
import { Portal, PortalTarget } from 'ember-stargate';

import type HdsComponentsRegistry from '../src/template-registry';
import type EmberElementHelperRegistry from 'ember-element-helper/template-registry';
import type EmberStargateRegistry from 'ember-stargate/template-registry';
import type EmberStyleModifierRegistry from 'ember-style-modifier/template-registry';
import type EmberTruthRegistry from 'ember-truth-helpers/template-registry';
import type PowerSelectRegistry from 'ember-power-select/template-registry';
import type RenderModifiersRegistry from '@ember/render-modifiers/template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends HdsComponentsRegistry,
      EmberElementHelperRegistry,
      EmberStargateRegistry,
      EmberStyleModifierRegistry,
      EmberTruthRegistry,
      PowerSelectRegistry,
      RenderModifiersRegistry /*, other addon registries */ {
    // local entries
    LinkToExternal: typeof LinkTo;
    // we have to use `ember-stargate` version `0.4.3` because version `0.5.0` causes a break in the tests for `ember-lts-3.28`
    Portal: typeof Portal;
    PortalTarget: typeof PortalTarget;
    'sort-by': HelperLike<{
      Args: {
        Positional: [string[], unknown[]];
      };
      Return: unknown[];
    }>;
  }
}
