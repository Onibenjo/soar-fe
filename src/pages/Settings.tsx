import { AppLayout } from "../components/common/AppLayout";
import ProfileForm from "../components/settings/ProfileForm";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "../components/ui/tabs";

const SettingsPage = () => {
  return (
    <AppLayout className="space-y-6" activeTab="settings" title="Settings">
      <div className="rounded-3xl p-5 lg:p-8 bg-white">
        <Tabs defaultValue="profile" className="w-full">
          <TabsList>
            <TabsTrigger value="profile">Edit Profile</TabsTrigger>
            <TabsTrigger value="preference">Preferences</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
          </TabsList>
          <TabsContent value="profile" className="py-10">
            <ProfileForm />
          </TabsContent>
          <TabsContent value="preference">Preference</TabsContent>
          <TabsContent value="security">Security</TabsContent>
        </Tabs>
      </div>
    </AppLayout>
  );
};

export default SettingsPage;
