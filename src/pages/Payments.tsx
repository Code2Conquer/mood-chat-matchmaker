
import { Link } from 'react-router-dom';
import Navbar from "@/components/Navbar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, CreditCard, Shield, Zap, Check, Sparkles } from 'lucide-react';

const Payments = () => {
  // Mock payment history
  const transactions = [
    { id: 'tx1', date: 'Apr 18, 2025', amount: '$9.99', description: 'Monthly Subscription', status: 'Completed' },
    { id: 'tx2', date: 'Mar 18, 2025', amount: '$9.99', description: 'Monthly Subscription', status: 'Completed' },
    { id: 'tx3', date: 'Feb 18, 2025', amount: '$19.99', description: 'Character Pack: Sci-Fi Bundle', status: 'Completed' },
    { id: 'tx4', date: 'Feb 5, 2025', amount: '$4.99', description: 'Scene: Mystery Mansion', status: 'Completed' },
    { id: 'tx5', date: 'Jan 18, 2025', amount: '$9.99', description: 'Monthly Subscription', status: 'Completed' }
  ];
  
  return (
    <div className="min-h-screen bg-accent-blue/5">
      <Navbar />
      
      <main className="container mx-auto px-4 py-6 max-w-4xl">
        <div className="flex items-center mb-6">
          <Button variant="ghost" size="icon" asChild className="mr-2">
            <Link to="/">
              <ArrowLeft className="h-5 w-5" />
            </Link>
          </Button>
          <h1 className="text-2xl font-bold">Payments</h1>
        </div>
        
        <Tabs defaultValue="subscription" className="mb-8">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="subscription">Subscription</TabsTrigger>
            <TabsTrigger value="history">History</TabsTrigger>
          </TabsList>
          <TabsContent value="subscription" className="mt-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Free Plan */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Free Plan</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">$0 <span className="text-sm font-normal text-muted-foreground">/month</span></div>
                  <p className="text-muted-foreground text-sm mb-6">For casual users.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">5 chats per day</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Basic characters</span>
                    </li>
                    <li className="flex items-center">
                      <Check className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Standard response time</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Current Plan</Button>
                </CardContent>
              </Card>
              
              {/* Premium Plan */}
              <Card className="border-primary-purple relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-primary-purple text-white text-xs px-3 py-1 rounded-bl-lg">
                  POPULAR
                </div>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Premium</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">$9.99 <span className="text-sm font-normal text-muted-foreground">/month</span></div>
                  <p className="text-muted-foreground text-sm mb-6">For regular chatters.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Unlimited chats</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Premium characters</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Priority response time</span>
                    </li>
                    <li className="flex items-center">
                      <Zap className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Exclusive scenes</span>
                    </li>
                  </ul>
                  <Button className="w-full">Upgrade Now</Button>
                </CardContent>
              </Card>
              
              {/* Pro Plan */}
              <Card>
                <CardHeader className="pb-3">
                  <CardTitle className="text-xl">Pro</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold mb-2">$19.99 <span className="text-sm font-normal text-muted-foreground">/month</span></div>
                  <p className="text-muted-foreground text-sm mb-6">For power users.</p>
                  <ul className="space-y-2 mb-6">
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Everything in Premium</span>
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Custom character creation</span>
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">Voice & video chat</span>
                    </li>
                    <li className="flex items-center">
                      <Sparkles className="h-4 w-4 mr-2 text-primary-purple" />
                      <span className="text-sm">API access</span>
                    </li>
                  </ul>
                  <Button variant="outline" className="w-full">Upgrade Now</Button>
                </CardContent>
              </Card>
            </div>
            
            <div className="mt-8 bg-white p-6 rounded-lg border border-border">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Shield className="h-5 w-5 text-primary-purple mr-2" />
                  <h3 className="font-medium">Secure Payment Processing</h3>
                </div>
                <div className="flex items-center space-x-2">
                  <CreditCard className="h-5 w-5 text-muted-foreground" />
                  <span className="text-xs text-muted-foreground">Visa, Mastercard, PayPal & more</span>
                </div>
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="history" className="mt-6">
            <div className="bg-white rounded-lg border border-border overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-muted/50">
                      <th className="px-4 py-3 text-left text-sm font-medium">Date</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Description</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Amount</th>
                      <th className="px-4 py-3 text-left text-sm font-medium">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {transactions.map(tx => (
                      <tr key={tx.id} className="hover:bg-muted/20">
                        <td className="px-4 py-4 text-sm">{tx.date}</td>
                        <td className="px-4 py-4 text-sm">{tx.description}</td>
                        <td className="px-4 py-4 text-sm font-medium">{tx.amount}</td>
                        <td className="px-4 py-4 text-sm">
                          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                            {tx.status}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
};

export default Payments;
