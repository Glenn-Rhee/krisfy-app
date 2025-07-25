import Container from '@/components/Container';

const Dashboard = () => {
  return (

    <div className="bg-[#0e162b]">
      {/* Main page */}
      <main className="bg-gradient-to-tr pt-10 from-[#1e163e] via-[#0e162c] h-screen to-[#1e163e]">
        <Container className="gap-x-4 items-center h-[90vh] justify-between mx-auto">
          <h2 className="text-4xl font-bold text-white">Dashboard</h2>
        </Container>

      </main>
    </div>

  )
}

export default Dashboard;
