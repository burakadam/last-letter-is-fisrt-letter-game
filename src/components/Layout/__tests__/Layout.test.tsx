import { renderWithProviders } from '@/utils/testUtils';

import { Layout } from '../Layout';

describe('render app layout', () => {
  it('render "content is here" text inside layout', () => {
    const { container } = renderWithProviders(<Layout>Content is here</Layout>);

    expect(container.firstChild).toMatchSnapshot();
  });
});
