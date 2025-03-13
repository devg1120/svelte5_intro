FROM rust:1.81.0

WORKDIR /workdir
COPY . /workdir

RUN cargo build --release

CMD ["/workdir/target/release/rust-sns"]
