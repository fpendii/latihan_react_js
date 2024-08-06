import React from 'react';
import { Container, Title, Grid, Card, Text, Button } from '@mantine/core';

const DashboardPage = () => {
  return (
    <Container size="lg" my={40}>
      <Title align="center">Dashboard</Title>
      <Grid mt="md">
        <Grid.Col span={4}>
          <Card shadow="sm" padding="lg">
            <Text weight={500}>Statistik 1</Text>
            <Text size="sm" color="dimmed">Detail statistik 1</Text>
            <Button fullWidth mt="md">Aksi 1</Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="lg">
            <Text weight={500}>Statistik 2</Text>
            <Text size="sm" color="dimmed">Detail statistik 2</Text>
            <Button fullWidth mt="md">Aksi 2</Button>
          </Card>
        </Grid.Col>
        <Grid.Col span={4}>
          <Card shadow="sm" padding="lg">
            <Text weight={500}>Statistik 3</Text>
            <Text size="sm" color="dimmed">Detail statistik 3</Text>
            <Button fullWidth mt="md">Aksi 3</Button>
          </Card>
        </Grid.Col>
      </Grid>
    </Container>
  );
};

export default DashboardPage;
