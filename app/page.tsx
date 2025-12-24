import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

export default function Home() {
  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance leading-tight">
            Become a <span className="block">STANLEY Product</span>
            <span className="block">Reviewer</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-pretty">
            Get paid to test the latest drinkware innovations and help shape the future of hydration products
          </p>
          <Button
            size="lg"
            className="bg-black hover:bg-black/90 text-white px-12 py-6 text-lg rounded-full h-auto"
            asChild
          >
            <a href="https://gloffers.org/aff_c?offer_id=154&aff_id=115643" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>

      {/* Program Benefits Section */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Program Benefits</h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Join our exclusive reviewer program and enjoy these amazing perks
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-neutral-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">💼</span>
                  <h3 className="text-2xl font-bold">Earn Perks</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Get paid for your honest reviews and receive exclusive discounts on future purchases.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">🌟</span>
                  <h3 className="text-2xl font-bold">Exclusive Access</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Be the first to test new Stanley products before they're available to the public.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">👥</span>
                  <h3 className="text-2xl font-bold">Exclusive Community</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Join a network of outdoor enthusiasts and product testers.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">⏰</span>
                  <h3 className="text-2xl font-bold">Flexible Schedule</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Review products on your own time with no strict deadlines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-neutral-100 border-0">
              <CardContent className="p-8">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-4xl">💡</span>
                  <h3 className="text-2xl font-bold">Influence Products</h3>
                </div>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Your feedback directly impacts future product development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>

          <div className="space-y-12">
            {/* Step 1 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                1
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-3">Apply</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Fill out our simple application form and tell us about your lifestyle and outdoor activities.
                </p>
              </div>
            </div>

            {/* Step 2 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                2
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-3">Get Selected</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Our team reviews applications and sends out acceptance mail or SMS to notify you that you've been
                  selected.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                3
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-3">Receive Products</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Selected reviewers receive STANLEY products delivered directly to their doorstep.
                </p>
              </div>
            </div>

            {/* Step 4 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                4
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-3">Create Reviews</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Test products and create honest, detailed reviews about quality, durability, and performance.
                </p>
              </div>
            </div>

            {/* Step 5 */}
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                5
              </div>
              <div className="flex-1 pt-2">
                <h3 className="text-2xl font-bold mb-3">Get Paid</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Earn rewards for your reviews and continue to receive new items monthly.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Join Section */}
      <section className="px-4 py-16 bg-neutral-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Why Join Our Program?</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Build Your Portfolio</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Create professional product content that can help build your personal brand as an outdoor enthusiast.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Exclusive Community</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Join a network of outdoor enthusiasts and industry professionals.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Flexible Schedule</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Review products on your own time with no strict deadlines.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white border-0 shadow-sm">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4">Influence Products</h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Your feedback directly impacts future product development.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="px-4 py-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <Card className="bg-neutral-50 border-0">
            <CardContent className="p-12 text-center">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 rounded-full bg-pink-500 flex items-center justify-center text-white text-3xl font-bold">
                  O
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-2">Olivia M.</h3>
              <p className="text-muted-foreground mb-6">Content Creator</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-4 py-20 bg-pink-500">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white text-balance">Ready to Join?</h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 text-pretty leading-relaxed">
            Apply today and start receiving free Stanley products while earning money for your honest reviews
          </p>
          <Button
            size="lg"
            className="bg-white text-pink-500 hover:bg-white/90 px-12 py-6 text-lg rounded-full h-auto font-bold"
            asChild
          >
            <a href="https://gloffers.org/aff_c?offer_id=154&aff_id=115643" target="_blank" rel="noopener noreferrer">
              Apply Now
            </a>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-pink-500">STANLEY</span>Review
            </h3>
            <p className="text-white/70 text-lg leading-relaxed max-w-2xl">
              Join our community of outdoor enthusiasts and help shape the future of hydration products
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold mb-4">Links</h4>
          </div>
        </div>
      </footer>
    </div>
  )
}
