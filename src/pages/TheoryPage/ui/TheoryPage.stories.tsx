import type { Meta, StoryObj } from '@storybook/react';
import { TheoryPage } from './TheoryPage';
import { UTApiURL } from '@/shared/api/UTApi/api';

const meta = {
  title: 'Pages/Theory',
  component: TheoryPage,
  parameters: {
    layout: 'fullscreen',
  },
} satisfies Meta<typeof TheoryPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  parameters: {
    mockData: [
      {
        url: `${UTApiURL}/listFiles`,
        method: 'POST',
        status: 200,
        response: {
          hasMore: false,
          files: [
            {
              id: '19a1c283-cd7f-4df3-b080-5913fde495f3',
              key: 'c6ofh690RltrylG2sHWutMolOEnxJ2e4HYKSiA0GQI6m5NsL',
              name: 'Теория 22.pdf',
              size: 110238,
              uploadedAt: 1738991131000,
              customId: null,
              status: 'Uploaded',
            },
            {
              id: '82c824c4-b2f8-4c36-8597-b92449c11b32',
              key: 'c6ofh690RltrhMucd2yqbNCIMQyiW5JgrXTLElpx4HBF0SRA',
              name: 'Теория 11.pdf',
              size: 147043,
              uploadedAt: 1738162794000,
              customId: null,
              status: 'Uploaded',
            },
            {
              id: 'f6d48e1b-21e3-4a48-82be-238659c76bb1',
              key: 'c6ofh690RltrHtQa9oN2LPeBykKjcJ6bZqCEHt4F1u7IzYgx',
              name: 'Теория 13.pdf',
              size: 135722,
              uploadedAt: 1736535250000,
              customId: null,
              status: 'Uploaded',
            },
            {
              id: 'e950d41b-6e14-4744-8ef0-7416a7f19d41',
              key: 'c6ofh690Rltr3telkaqmW4gB1a8fIhRQqcEbNis7LTrpY0kn',
              name: 'Теория 18.pdf',
              size: 302184,
              uploadedAt: 1736535250000,
              customId: null,
              status: 'Uploaded',
            },
            {
              id: 'b02573d9-9c74-4876-8c21-327481707f92',
              key: 'c6ofh690RltrwFG01CLVY9xWfihqz4okTZmaB7vAlbQOL2dr',
              name: 'Теория 9.pdf',
              size: 194517,
              uploadedAt: 1736535250000,
              customId: null,
              status: 'Uploaded',
            },
            {
              id: '835beb04-dbe7-4b2c-adca-ee9f331ca777',
              key: 'c6ofh690RltrpVA68jLIpi2ycj05WoargOeSTCKYXMVBAHqk',
              name: 'Теория 10.pdf',
              size: 128668,
              uploadedAt: 1736535250000,
              customId: null,
              status: 'Uploaded',
            },
            {
              id: '7a32b0c5-6928-40b1-80e2-0d807104be0b',
              key: 'c6ofh690RltrXGpIZPtCaGmoWBKM5yen3OcEpulXDFRSLh7A',
              name: 'Теория 15.pdf',
              size: 339014,
              uploadedAt: 1736535250000,
              customId: null,
              status: 'Uploaded',
            },
            {
              id: 'bd406ba3-3c17-49bf-9bc6-a9ab64d01b59',
              key: 'c6ofh690RltrXbRl6htCaGmoWBKM5yen3OcEpulXDFRSLh7A',
              name: 'Теория 8.pdf',
              size: 272869,
              uploadedAt: 1736535249000,
              customId: null,
              status: 'Uploaded',
            },
            {
              id: '75c34f23-b2cd-4388-9e93-1dc12a4cbaa1',
              key: 'c6ofh690RltrLVBD36kU9alNXsgCh6eprc0iMQbD5YGSoJyK',
              name: 'Теория 7.pdf',
              size: 317127,
              uploadedAt: 1736535249000,
              customId: null,
              status: 'Uploaded',
            },
          ],
        },
      },
    ],
  },
};
