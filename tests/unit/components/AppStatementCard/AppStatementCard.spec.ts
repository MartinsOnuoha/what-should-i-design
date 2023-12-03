import { describe, expect, it } from 'vitest';
import {mount} from "@vue/test-utils";
import AppStatementCard from "@/components/AppStatementCard/AppStatementCard.vue";
import {Component} from "vue";

describe('AppStatementCard', function () {
  const UilCommentShare: Component = { name: 'UilCommentShare', render: (h: (arg0: string) => any) => h('div'), functional: false };
  const AppCategory: Component = { name: 'AppCategory', render: (h: (arg0: string) => any) => h('div'), functional: false };
  const makeStatementCard = (props: any, options?: any, slots?: any) => {
    return mount(
      AppStatementCard, {
        stubs: {
          UilCommentShare,
          AppCategory,
        },
        props: { ...props },
        slots,
        ...options,
      });
  };

  it('renders component', function () {
    const statement = { id: 1, title: 'Testing title', description: 'Testing description', category: { id: 1, name: 'test category' }, samples: [{}]}
    const component = makeStatementCard({ statement })

    const text = component.text()
    expect(text).toContain('Testing description')
  })
})
