import { Tabs } from 'expo-router';

export default function MainTabsLayout() {
  return(
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007AFF',
      }}
    >
      <Tabs.Screen name="house" options={{title: 'H'}}/>
      <Tabs.Screen name="onlineShop" options={{title: 'OS'}}/>
      <Tabs.Screen name="onlineChat" options={{title: 'OC'}} />  
      <Tabs.Screen name="game" options={{title:'G'}}/>

    </Tabs>
  );
}
