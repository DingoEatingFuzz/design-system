/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: MPL-2.0
 */
import '@glint/environment-ember-loose';

import type EmberStyleModifierRegistry from 'ember-style-modifier/template-registry';
import type EmberTruthRegistry from 'ember-truth-helpers/template-registry';
import type FlightIconsRegistry from '@hashicorp/ember-flight-icons/template-registry';
import type HdsComponentsRegistry from '@hashicorp/design-system-components/template-registry';
import type PageTitle from 'ember-page-title/template-registry';
import type RenderModifiersRegistry from '@ember/render-modifiers/template-registry';
import type ShowcaseTemplateRegistry from './template-registry';

declare module '@glint/environment-ember-loose/registry' {
  export default interface Registry
    extends EmberStyleModifierRegistry,
      EmberTruthRegistry,
      FlightIconsRegistry,
      HdsComponentsRegistry,
      PageTitle,
      RenderModifiersRegistry,
      ShowcaseTemplateRegistry {}
}
