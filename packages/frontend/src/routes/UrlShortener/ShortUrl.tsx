import { ActionIcon, Anchor, Button, CopyButton, Group, Stack, Title } from "@mantine/core";
import { IconCopy, IconCheck } from "@tabler/icons-react";

type Props = {
  shortUrl: string;
  regenerateShortUrl: () => void;
};

export const ShortUrl = ({ shortUrl, regenerateShortUrl }: Props) => (
  <Stack>
    <Title order={2}>Lien raccourci</Title>
    <Group>
      <Anchor href={shortUrl} target="_blank">
        {shortUrl}
      </Anchor>
      <CopyButton value={shortUrl}>
        {({ copied, copy }) => (
          <ActionIcon color={copied ? "teal" : "blue"} onClick={copy}>
            {copied ? <IconCheck size={16} /> : <IconCopy size={16} />}
          </ActionIcon>
        )}
      </CopyButton>
    </Group>
    <Group>
      <Button onClick={regenerateShortUrl} variant="outline">
        Créer un nouveau lien
      </Button>
    </Group>
  </Stack>
);
