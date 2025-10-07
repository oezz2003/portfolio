import { Column, Heading, Text, Row, Badge } from "@once-ui-system/core";
import { home } from "@/resources";

export function RecentActivity() {
  if (!home.recentActivity.display) return null;

  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'in progress':
        return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'learning':
        return 'bg-purple-100 text-purple-800 border-purple-200';
      case 'active':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <Column fillWidth gap="24" marginBottom="l">
      <Row fillWidth paddingRight="64">
        <div className="w-12 h-px bg-gradient-to-r from-brand-alpha-strong to-transparent" />
      </Row>
      <Column fillWidth gap="16" marginTop="40">
        <Column maxWidth="s" paddingLeft="l" paddingTop="24">
          <Heading as="h2" variant="display-strong-xs" wrap="balance">
            {home.recentActivity.title}
          </Heading>
          <Text 
            variant="heading-default-m" 
            onBackground="neutral-weak" 
            marginTop="8"
          >
            {home.recentActivity.description}
          </Text>
        </Column>
        <Column 
          flex={3} 
          paddingX="20" 
          paddingY="24"
          gap="16"
        >
          {home.recentActivity.activities.map((activity, index) => (
            <Row
              key={activity.title}
              paddingX="24"
              paddingY="20"
              className="bg-gradient-to-r from-neutral-alpha-weak/30 to-transparent rounded-lg border border-neutral-alpha-weak/50 hover:border-brand-alpha-weak/50 transition-all duration-300"
              gap="16"
            >
              <Column flex={1} gap="8">
                <Row gap="12" vertical="center">
                  <Text variant="heading-default-s" onBackground="neutral-strong">
                    {activity.title}
                  </Text>
                  <Badge
                    background="neutral-alpha-weak"
                    paddingX="8"
                    paddingY="4"
                    onBackground="neutral-strong"
                    textVariant="label-default-xs"
                    arrow={false}
                    className={getStatusColor(activity.status)}
                  >
                    {activity.status}
                  </Badge>
                </Row>
                <Text variant="body-default-s" onBackground="neutral-weak">
                  {activity.description}
                </Text>
                <Text variant="label-default-xs" onBackground="neutral-weak">
                  {new Date(activity.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </Text>
              </Column>
            </Row>
          ))}
        </Column>
      </Column>
      <Row fillWidth paddingLeft="64" horizontal="end">
        <div className="w-12 h-px bg-gradient-to-l from-brand-alpha-strong to-transparent" />
      </Row>
    </Column>
  );
}

